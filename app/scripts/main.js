console.log('\'Allo \'Allo!');

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });

// const EditorJS = require('@editorjs/editorjs')
// const Header = require('@editorjs/header');
// const CodeTool = require('@editorjs/code');
// const Delimiter = require('@editorjs/delimiter')
// const List = require('@editorjs/list')
// const Quote = require('@editorjs/quote')
// const SimpleImage = require('@editorjs/simple-image')
// const Table = require('@editorjs/table')
// const InlineCode = require('@editorjs/inline-code')
// const Paragraph = require('@editorjs/paragraph')
// const Warning = require('@editorjs/warning')
// const Marker = require('@editorjs/marker')
// const Underline = require('@editorjs/underline')

let existingData;
function loadData() {
  existingData = JSON.parse(localStorage.getItem('editor') || {});
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

function deleteAll() {
  editor = new EditorJS({
    holder: 'editor',
  })
  var div = document.getElementById('editor');
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  console.log('clear function called');
}
