# seqdepot-to-pfql

[![Build Status](https://travis-ci.org/biowonks/seqdepot-to-pfql.svg?branch=master)](https://travis-ci.org/biowonks/seqdepot-to-pfql)
[![Coverage Status](https://coveralls.io/repos/github/biowonks/seqdepot-to-pfql/badge.svg?branch=develop)](https://coveralls.io/github/biowonks/seqdepot-to-pfql?branch=develop)
[![License](https://img.shields.io/badge/license-CC0--1.0-blue.svg)](https://creativecommons.org/publicdomain/zero/1.0/legalcode)

Service to parse SeqDepot standard output to make it compatible with PFQL

## Install
```
$ npm install seqdepot-to-pfql
```

## Usage
```javascript
const seqdepot2pfql = require('seqdepot-to-pfql')
const pfqlCompatible = seqdepot2pfql.parser(SeqDepotOutput)
```

## SeqDepot tools supported

* pfam27
* pfam28
* pfam29
* DAS
