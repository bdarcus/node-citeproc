
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

## License 

(The MIT License)

Copyright (c) 2011 Frank Bennett &lt;biercenator@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
