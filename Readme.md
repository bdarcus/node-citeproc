
# citeproc

  A javascript implementation of CSL for advanced citation and bibliographic processing.

# status

This is non-functional ATM. What we need is to be able to do something like:

    var citeproc = require('citeproc');
    var style = 'http://citationstyles.org/styles/apa.csl';
    var processor = new citeproc.CSL.Engine(bibdata, 'en', style );
    console.log(processor.makeBibliography());

The library should be usuable for both local (including CLI) apps, as well 
as web apps and services.

Note that this ngen-generated package includes setup for the expresso test
framework. If it were setup, one would test by simply installing expresso:

$ npm install expresso

... and then running this in the root of the repo:

$ expresso

## License 

See LICENSE file.
