import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';

import pkg from './package.json';

export default {
	input: 'src/index.js',
	output: [
		{
			file: pkg.module,
			format: 'es',
			sourcemap: true
		}
	],
	plugins: [
		external(),
		postcss({
			modules: true,
			plugins: [
				require('postcss-inline-svg'),
				require('postcss-svgo')
			]
		}),
		url(),
		svgr(),
		babel({
			exclude: 'node_modules/**',
			externalHelpers: true
		}),
		resolve({
			preferBuiltins: true
		}),
		builtins(),
		commonjs()
	]
};
