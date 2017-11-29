# seqdepot-to-pfql

[![Build Status](https://travis-ci.org/biowonks/seqdepot-to-pfql.svg?branch=master)](https://travis-ci.org/biowonks/seqdepot-to-pfql)
[![Coverage Status](https://coveralls.io/repos/github/biowonks/seqdepot-to-pfql/badge.svg?branch=develop)](https://coveralls.io/github/biowonks/seqdepot-to-pfql?branch=develop)
![License](https://i.creativecommons.org/p/zero/1.0/88x31.png)

Service to parse SeqDepot standard output to make it compatible with PFQL

## Install
```
$ npm install seqdepot-to-pfql
```

## Usage
```javascript
const seqdepot2pfql = require('seqdepot-to-pfql')
const pfqlCompatible = seqdepot2pfql(SeqDepotOutput)
```

## SeqDepot tools supported

* pfam27
* pfam28
* pfam29
* DAS
