import path = require('path')
import dependencyCheckCB = require('dependency-check')
import thenify = require('thenify')
import findPackages = require('find-packages')

const checkMissing = dependencyCheckCB.missing
const dependencyCheck = thenify(dependencyCheckCB)

export = async function (project) {
  const pkgs = await findPackages(project, {
    ignore: [],
    dot: true,
  })
  for (const pkg of pkgs) {
    try {
      process.chdir(pkg.path) // TODO: should be fixed in dependency-check
      const data = await dependencyCheck({
        path: pkg.path,
      })
      const missing = checkMissing(data.package, data.used)
      if (missing.length) {
        console.log('Missing', missing.join(', '), 'in', path.relative(project, pkg.path))
      }
    } catch (err) {
      console.warn(err.message, 'in', path.relative(project, pkg.path))
    }
  }
}
