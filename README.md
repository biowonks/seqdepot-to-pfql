# seqdepot-to-pfql

Service to parse SeqDepot standard output to make it compatible with PFQL

## Install
```
$ npm install seqdepot-to-pfql
```

## Usage
```javascript
const seqdepot-to-pfql = require('seqdepot-to-pfql')
const pfqlCompatible = seqdepot-to-pfql(SeqDepotOutput)
```

## SeqDepot tools supported

* pfam27
* pfam28
* pfam29
* DAS
