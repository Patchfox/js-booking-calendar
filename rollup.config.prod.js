import sass from 'rollup-plugin-sass';
import uglify from "rollup-plugin-uglify";

export default {
    input: 'src/index.js',
    output: {
        name: 'Gantt',
        file: 'dist/frappe-gantt.js',
        format: 'iife'
    },
    plugins: [
        sass({
            output: 'dist/frappe-gantt.css'
        }),
        uglify()
    ]
};
