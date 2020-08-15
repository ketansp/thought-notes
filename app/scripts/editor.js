let existingData;
function loadData() {
  existingData = localStorage.getItem('editor');
  existingData = existingData ? JSON.parse(existingData) : {};
}

loadData();
let editor = new EditorJS({
  holder: 'editor',
  autofocus: true,
  data: existingData,
  tools: {
    header: {
      class: Header,
      config: {
        placeholder: 'Enter a header',
        levels: [1, 2, 3, 4, 5, 6],
        defaultLevel: 3
      }
    },
    code: CodeTool,
    delimiter: Delimiter,
    checklist: {
      class: Checklist,
      inlineToolbar: true,
    },
    list: {
      class: List,
      inlineToolbar: true,
    },
    quote: {
      class: Quote,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+O',
      config: {
        quotePlaceholder: 'Enter a quote',
        captionPlaceholder: 'Quote\'s author',
      },
    },
    image: SimpleImage,
    table: {
      class: Table,
      inlineToolbar: true,
      config: {
        rows: 5,
        cols: 4,
      },
    },
    inlineCode: {
      class: InlineCode,
      shortcut: 'CMD+SHIFT+M',
    },
    paragraph: {
      class: Paragraph,
      inlineToolbar: true,
    },
    warning: {
      class: Warning,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+W',
      config: {
        titlePlaceholder: 'Title',
        messagePlaceholder: 'Message',
      },
    },
    Marker: {
      class: Marker,
      shortcut: 'CMD+SHIFT+M',
    },
    underline: Underline
  }
});


function save() {
  console.log('save function called');
  editor.save().then((outputData) => {
    localStorage.setItem('editor', JSON.stringify(outputData));
    console.log('Article data: ', outputData)
  }).catch((error) => {
    console.log('Saving failed: ', error)
  });
}

function reset() {
  editor = new EditorJS({
    holder: 'editor',
  })
  var div = document.getElementById('editor');
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  localStorage.setItem('editor', JSON.stringify({}));
  console.log('clear function called');
}


function exportData() {
  editor.save().then((outputData) => {
    saveJSON(outputData, 'thought-notes-export.json');
  }).catch((error) => {
    console.log('Saving failed: ', error)
  });
}


function validateData(data) {
  let isValid = true;
  if (!data) {
    isValid = false;
  }
  if (isValid && (!data.version || !data.blocks || !Array.isArray(data.blocks))) {
    isValid = false;
  }
  if (isValid) {
    data.blocks.forEach(function (block) {
      if (!block || !block.type || !block.data) {
        isValid = false;
      }
    });
  }
  return isValid;
}

// var fileList;
// function onImportFileChange(event) {
//   fileList = event.target.files;
//   console.log(JSON.stringify(fileList[0]))
//   //TODO do something with fileList.  
// }

function importData() {
  //reset();
  var files = document.getElementById('imported-file').files;
  var fileReader = new FileReader();
  var formatted;
  fileReader.onload = function (e) {
    var result = JSON.parse(e.target.result);
    editor = new EditorJS({
      holder: 'editor',
      autofocus: true,
      data: result,
      tools: {
        header: {
          class: Header,
          config: {
            placeholder: 'Enter a header',
            levels: [1, 2, 3, 4, 5, 6],
            defaultLevel: 3
          }
        },
        code: CodeTool,
        delimiter: Delimiter,
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+O',
          config: {
            quotePlaceholder: 'Enter a quote',
            captionPlaceholder: 'Quote\'s author',
          },
        },
        image: SimpleImage,
        table: {
          class: Table,
          inlineToolbar: true,
          config: {
            rows: 5,
            cols: 4,
          },
        },
        inlineCode: {
          class: InlineCode,
          shortcut: 'CMD+SHIFT+M',
        },
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
        warning: {
          class: Warning,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+W',
          config: {
            titlePlaceholder: 'Title',
            messagePlaceholder: 'Message',
          },
        },
        Marker: {
          class: Marker,
          shortcut: 'CMD+SHIFT+M',
        },
        underline: Underline
      }
    });
  }
  fileReader.readAsText(files.item(0));
}

//save periodically
setInterval(save, 20000);
