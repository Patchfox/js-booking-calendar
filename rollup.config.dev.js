import sass from 'rollup-plugin-sass';

export default {
    input: 'src/index.js',
    output: {
        name: 'Gantt',
        file: 'dist/js-booking-calendar.js',
        format: 'iife'
    },
    plugins: [
        sass({
            output: 'dist/js-booking-calendar.css'
        })
    ]
};
