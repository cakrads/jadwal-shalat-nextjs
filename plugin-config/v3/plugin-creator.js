/* eslint-disable no-console */
const fse = require('fs-extra');
const path = require('path');

const pathToNext = path.join(__dirname, '../../out');
const pathToPlugin = path.join(__dirname, '../../chrome-extension');
const pathToConfig = path.join(__dirname, '../../plugin-config/v3');

async function remove(path) {
  try {
    await fse.remove(path);
  } catch (err) {
    console.error('Terjadi kesalahan saat Remove');
  }
}

async function copy(source, destination) {
  try {
    await fse.copy(source, destination);
  } catch (err) {
    console.error('Terjadi kesalahan saat Copy');
  }
}

async function rename(path, newName) {
  try {
    await copy(path, newName);
    await remove(path);
  } catch (error) {
    console.error('Terjadi kesalahan saat Rename');
  }
}

async function replace(filePath, before, after) {
  try {
    const data = await fse.readFile(filePath, 'utf8');

    const replacer = new RegExp(before, 'g');
    const result = data.replace(replacer, after);

    await fse.writeFile(filePath, result, 'utf8');
  } catch (error) {
    console.error('Terjadi kesalahan saat Replace');
  }
}

(async () => {
  try {
    await remove(pathToPlugin);
    await copy(pathToNext, pathToPlugin);

    const indexPath = `${pathToPlugin}/index.html`;
    const optionPath = `${pathToPlugin}/option.html`;
    const notFoundPath = `${pathToPlugin}/404.html`;

    await replace(indexPath, './_next', './next');
    await copy(indexPath, optionPath);
    await replace(indexPath, '<body>', '<body style="width:400px">');

    await replace(notFoundPath, './_next', './next');

    await rename(`${pathToPlugin}/_next`, `${pathToPlugin}/next`);

    await copy(`${pathToConfig}/manifest.json`, `${pathToPlugin}/manifest.json`);
    await copy(`${pathToConfig}/bg-worker.js`, `${pathToPlugin}/bg-worker.js`);
    console.log('Berhasil Membuat ChromeExtension');

  } catch (error) {
    console.error('Terjadi Kesalahan');
  }
})();

