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

// Add the following code if you want the name of the file appear on select
$('.custom-file-input').on('change', function () {
  var fileName = $(this).val().split('\\').pop();
  $(this).siblings('.custom-file-label').addClass('selected').html(fileName);
});
