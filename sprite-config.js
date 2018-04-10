const replace = require('replace-in-file');

  const options = {
    files: './src/scss/_sprites.scss',
    from: '../',
    to: '../../',
  };
  try {
    const changes = replace.sync(options);
    console.log('Modified files:', changes.join(', '));

  }
  catch (error) {
    console.error('Error occurred:', error);
  }





