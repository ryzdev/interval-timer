### Customisable interval timer

A customisable interval timer which will display a random symbol at each interval.

Also vibrates on interval for mobile devices.

Customise with URL query parameters. Touch or click screen to start.

| Parameter        | Use                                                           |
|------------------|---------------------------------------------------------------|
| symbols          | comma seperated list of items to randomly display at interval |
| interval         | interval in seconds                                           |
| totalTime        | total time in seconds                                         |
| disableVibration | boolean to disable vibration                                  |

e.g.

`index.html?symbols=a,b,c&interval=2&totalTime=10`