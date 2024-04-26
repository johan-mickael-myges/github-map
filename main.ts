/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

    setup();
}).catch(e => console.error(e));

function setup() {
    setupOnEnterRepoZone();
    setupOnEnterBrowseRepositoryWebsiteZone();
    setupOnEnterReadmeArea();
}

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

function setupOnEnterRepoZone(){
    WA.room.area.onEnter('repoZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("repoPop", <string>WA.state.repositoryPopupDescriptionText, []);
    });
    WA.room.area.onLeave('repoZone').subscribe(closePopup);
}

function setupOnEnterBrowseRepositoryWebsiteZone(){
    WA.room.area.onEnter('browseRepositoryWebsiteArea').subscribe(onEnterRepositoryWebsiteAreaCallback);
}

function onEnterRepositoryWebsiteAreaCallback(){
    const triggerMessage = WA.ui.displayActionMessage({
        message: "press 'space' to browse the repository website in a new tab",
        callback: () => {
            WA.nav.openTab(<string>WA.state.repositoryWebsiteUrl);
        }
    });

    WA.room.area.onLeave('browseRepositoryWebsiteArea').subscribe(async () => triggerMessage.remove());
}

function setupOnEnterReadmeArea() {
    WA.room.area.onEnter('readmeArea').subscribe(onEnterReadmeAreaCallback);
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

export {};