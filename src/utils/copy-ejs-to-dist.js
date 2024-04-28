import fs from 'fs-extra';

async function copyEjsToDist(sourceDir, destinationDir) {
    await fs.copy(sourceDir, destinationDir)
        .then(() => console.log('EJS files copied successfully'))
        .catch(err => console.error('Error copying EJS files:', err));
}
export default copyEjsToDist;