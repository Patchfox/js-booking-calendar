<div align="center">
    <h2>JS Booking Calendar</h2>
    <p align="center">
        <p>Heavily customizable booking calendar in gantt style</p>
        <p>This is based on the work of <a href="https://frappe.github.io/gantt"><b>Frappe Gantt</b></a></p>
    </p>
</div>

<p align="center">
    <a href="https://frappe.github.io/gantt">
        <img src="https://user-images.githubusercontent.com/867456/102086034-c0845500-3e17-11eb-98c7-e65c62494f36.png">
    </a>
</p>

### Install
```
npm install js-booking-calendar
```

### Usage
Include it in your HTML:
```
import Gantt from "js-booking-calendar";

<svg id="gantt"></svg>
```

Configuration:
```js
const properties = [
    {
        'name': 'Group 1',
        'background_color': 'red',
        'bookings': [
            {
                id: '1',
                start: '2020-12-01',
                end: '2020-12-01',
                name: 'Foo',
                description: 'Description',
            },
            {
                id: '2',
                start: '2020-12-02',
                end: '2020-12-02',
                name: 'Bar',
                description: 'Description',
            },
        ]
    }	
];

const options = {
    on_click: function (task) {
        console.log(task);
    },
    on_date_change: function(task, start, end, lastScrollXPosition) {
        console.log(task);
    },
    on_progress_change: function(task, progress) {
        console.log(task, progress);
    },
    on_view_change: function(mode) {
        console.log(mode);
    },
    on_date_added: function (start, end, property, propertyIdx, xPosition, yPosition){
        // executed with double click on column
        console.log('start', start);
        console.log('end', end);
        console.log('property', property);
        console.log('propertyIdx', propertyIdx);
        console.log('xPosition', xPosition);
        console.log('yPosition', yPosition);
    },
    header_height: 50,
    column_width: 30,
    step: 24,
    view_modes: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'],
    popup_trigger: 'mouseover',
    bar_height: 20,
    bar_corner_radius: 3,
    arrow_curve: 5,
    padding: 18,
    view_mode: 'Day',   
    date_format: 'YYYY-MM-DD',
    custom_popup_html: null,
    start_date: "2020-12-01",
    end_date: "2021-03-31",
    show_label: true,
    animations_active: false,
    init_scroll_position: 0,
    custom_click_on_bar: function (task) {
        // only works if popup_trigger is not set to "click" 
        console.log('custom_click_on_bar', task)
    }
};

new Gantt("#gantt", properties, options); 
```

License: MIT
