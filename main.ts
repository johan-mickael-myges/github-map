/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;
let currentNotification: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(async () => {
    await welcomeMessage();
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

    await setup();
}).catch(e => console.error(e));

async function setup() {
    await onBoarding();

    setupCamera();
    setupOnEnterRepoZone();
    setupOnEnterBrowseRepositoryWebsiteZone();
    setupOnEnterOwnerInformationZone();
    setupOnEnterReadmeArea();
    setupExitMap();

    setupOnEnterOwnerRepositoryArea();
}

async function onBoarding() {
    await initGuideForAllRepositoryArea();
}

async function welcomeMessage() {
    await sendNotification("Welcome to the Github Adventure Map! 🎉");
}

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

async function closeNotification(){
    if (currentNotification !== undefined) {
        currentNotification.close();
        currentNotification = undefined;
    }
}

async function sendNotification(message: string, timeout: number = 3000) {
    await closeNotification();
    currentNotification = WA.ui.openPopup("notification", message, []);
    setTimeout(async () => {
        await closeNotification();
    }, timeout);
}

function setupCamera() {
    WA.camera.set(
        0, // position x
        0,
        1280,
        832,
        false,
        true
    );
}

function setupOnEnterRepoZone(){
    WA.room.area.onEnter('repositoryResumeArea').subscribe(() => {
        currentPopup = WA.ui.openPopup("repoPop", <string>WA.state.repositoryPopupDescriptionText, []);
    });
    WA.room.area.onLeave('repositoryResumeArea').subscribe(closePopup);
}

function setupOnEnterOwnerInformationZone(){
    WA.room.area.onEnter('ownerInformationsArea').subscribe(() => {
        currentPopup = WA.ui.openPopup("ownerInformationsPop", <string>WA.state.ownerInformationsText, [
            {
                label: `Open ${WA.state.repositoryOwner} profile on github`,
                className: "primary",
                callback: () => {
                    WA.nav.openTab(<string>WA.state.ownerGithubUrl);
                }
            }
        ]);
    });
    WA.room.area.onLeave('ownerInformationsArea').subscribe(closePopup);
}

function setupOnEnterBrowseRepositoryWebsiteZone(){
    WA.room.area.onEnter('browseRepositoryWebsiteArea').subscribe(onEnterRepositoryWebsiteAreaCallback);
}

function onEnterRepositoryWebsiteAreaCallback(){
    const triggerMessage = WA.ui.displayActionMessage({
        message: `Press SPACE to browse \n${WA.state.repositoryFullName}\n repository on github`,
        callback: () => {
            WA.nav.openTab(<string>WA.state.repositoryWebsiteUrl);
        }
    });

    WA.room.area.onLeave('browseRepositoryWebsiteArea').subscribe(async () => triggerMessage.remove());
}

async function initGuideForAllRepositoryArea() {
    WA.room.area.onEnter('allRepositoryArea').subscribe(async () => {
        await sendNotification("📚 Find all details about the repository in this area !");
    });
    WA.room.area.onLeave('allRepositoryArea').subscribe(async () => {
        await closeNotification();
    });
}

function setupOnEnterReadmeArea() {
    WA.room.area.onEnter('readmeArea').subscribe(onEnterReadmeAreaCallback);
}

function setupOnEnterOwnerRepositoryArea() {
    WA.room.area.onEnter('ownerTopRepositoriesArea').subscribe(onEnterOwnertopRepositoriesArea);
}

function onEnterReadmeAreaCallback() {
    WA.ui.modal.openModal({
        title: "About the project",
        src: <string>WA.state.readmeEmbedUrl,
        allow: "fullscreen",
        position: "center",
        allowApi: true,
    });

    WA.room.area.onLeave('readmeArea').subscribe(() => WA.ui.modal.closeModal());
}

function onEnterOwnertopRepositoriesArea() {

    WA.ui.modal.openModal({
        title: "Other repositories",
        src: `https://localhost:8877/repositories/${WA.state.repositoryOwner}?exclude=${WA.state.repositoryFullName}`,
        allow: "fullscreen",
        position: "right",
        allowApi: true,
    });

    WA.room.area.onLeave('ownerTopRepositoriesArea').subscribe(() => WA.ui.modal.closeModal());
}

function setupExitMap() {
    WA.room.area.onEnter('exitArea').subscribe(exitArea);
}
function exitArea() {
    WA.nav.goToPage('http://localhost:5173');
}

export {};
