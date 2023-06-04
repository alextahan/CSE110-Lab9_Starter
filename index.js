window.addEventListener('DOMContentLoaded', init);

class ColorError extends Error {
    constructor(message) {
      super(message); 
      this.name = "ColorError";
    }
  }

function init() {
    TrackJS.track('Testing TrackJS!');

    const log = document.getElementById('log');
    const error = document.getElementById('error');
    const count = document.getElementById('count');
    const warn = document.getElementById('warn');
    const assert = document.getElementById('assert');
    const clear = document.getElementById('clear');
    const dir = document.getElementById('dir');
    const dirxml = document.getElementById('dirxml');
    const groupstart = document.getElementById('groupstart');
    const groupend = document.getElementById('groupend');
    const table = document.getElementById('table');
    const start = document.getElementById('start');
    const end = document.getElementById('end');
    const trace = document.getElementById('trace');
    const global = document.getElementById('global');
    

    log.addEventListener('click', function() { console.log("Log Button clicked."); });
    error.addEventListener('click', function() { console.error("Button Error."); });
    count.addEventListener('click', function() { console.count("Count"); });
    warn.addEventListener('click', function() { console.warn("Don't you dare do that again."); });
    assert.addEventListener('click', function() { console.assert(true == false, 'This button was not supposed to be pressed.'); });
    clear.addEventListener('click', function() { console.clear(); });
    dir.addEventListener('click', function() { console.dir(document.body); });
    dirxml.addEventListener('click', function() { console.dirxml(document); });
    groupstart.addEventListener('click', function() { console.group('special group'); });
    groupend.addEventListener('click', function() { console.groupEnd('special group'); });
    table.addEventListener('click', function() { console.table([
        {
          class: 'COGS 101B',
          professor: 'Barrera',
        },
        {
          class: 'CSE 110',
          professor: 'Powell',
        },
        {
          class: 'CSE 140',
          professor: 'Chin',
        },
        {
          class: 'CSE 140L',
          professor: 'Eldon',
          units: 2
        }
      ]); });
    start.addEventListener('click', function() { console.time(); });
    end.addEventListener('click', function() { console.timeEnd(); });
    trace.addEventListener('click', function() { deep(); });
    function deep() { console.trace(); }
    global.addEventListener('click', function() { 
        const e = document.getElementById('asdfasdf');
        e.innerHTML = "Hello World!"
    });

    const colors = document.querySelector('#colors');
    colors.addEventListener('click', function() {
        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        try { 
            let color = getRandomColor();
            if (color[1] < 9) {
                throw new ColorError('Bad Color!');
            }
            document.body.style.background = color;
        } catch (error) {
            console.log(`Color Error: ${error.message}`); 
        } finally {
            console.info('Party Time!');
        }

    });

    window.onerror = function() {
        console.log('ERROR!!!');
    }
}