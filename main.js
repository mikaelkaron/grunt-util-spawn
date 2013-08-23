/*
 * grunt-util-spawn
 * https://github.com/mikaelkaron/grunt-util-spawn
 *
 * Copyright (c) 2013 Mikael Karon
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
	"use strict";

	var _ = grunt.util._;

	return function (options, doneFunction) {
		grunt.log.verbose.subhead("Spawning");

		if (grunt.option("no-write")) {
			grunt.log.verbose.writeln("Not actually spawning '" + options.cmd.cyan + "', spawning '" + "echo test".cyan + "' instead");

			_.extend(options, {
				"cmd": "echo",
				"args": [ "test" ]
			});
		}

		grunt.log.verbose.writeflags(options);

		return grunt.util.spawn(options, doneFunction);
	};
}