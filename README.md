# Tech-UTaskValidation
This is an validation code for task based interview for Techtronix.

This repo contains the code written in JavaScript on Cypress V9

The task for automation of 'hcaptcha' is not implemented as it was not able to reproduce the same exact nature on the website, including and excluding button verification and hcaptcha, though a python implementation is available that works with JavaScript but that was left out as to minimize the impact on the task. In turn, the hcaptcha is manually solved, wait command is used instead.     

Cypress was opted and implemented with Cucumber, Cucumber was implemented with gerkin.

Multiple Cucumber files were not created to not to hastle the speed of test runner.

*.cy.js files are as to be run to accomplish the task.

Tests with Cucumber are upaloaded on the Google Drive here: https://drive.google.com/drive/folders/1LeHEBydR5ikqMH7duZ51jl9JpDmrDKRy?usp=sharing


Cypress currently doesnot support for window change automation so the scenario feature for uploading proposal is not tested. 
