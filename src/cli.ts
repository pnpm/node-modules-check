#!/usr/bin/env node
'use strict'
import path = require('path')
import nodeModulesCheck = require('.')

const cwd = process.cwd()
const pathToCheck = path.basename(cwd) === 'node_modules'
  ? cwd
  : path.join(cwd, 'node_modules')

nodeModulesCheck(cwd)
