<template>
  <h1>Snickra</h1>

  <button @click="openSheet">Add directory</button>

  <p class="detail">
    …to let us know where the site lives on your computer.
  </p>
</template>

<script>
  const remote = require('electron').remote;
  const dialog = remote.dialog;

  export default {
    name: 'BlankSlate',

    methods: {
      openSheet() {
        dialog.showOpenDialog(remote.getCurrentWindow(), {
          title: 'Browse for site directory',
          properties: ['openDirectory', 'createDirectory']
        }, (filenames) => {
          if(filenames && typeof filenames[0] === 'string') {
            Router.go({
              name: 'newSite',
              params: {
                directory: encodeURIComponent(filenames[0])
              }
            });
          }
        });
      }
    }
  };
</script>
