/* ----------------------------------

Name: script.js

------------------------------------- */


/*====================================================


	Table of Contents


========================*/

jQuery(document).ready(function($) {
	"use strict";

	/*======================

		01. FAQ Accordion

	========================*/

		/* 
		   This code handles an accordion functionality.
		   It selects the accordion items, defines a toggleAccordion function, and attaches click event listeners to the accordion buttons.
		*/

		// Select all accordion items
		const items = document.querySelectorAll('.accordion-item');

		// Function to toggle the accordion
		function toggleAccordion() {
		  const itemToggle = this.getAttribute('aria-expanded');

		  // Close all accordion items
		  for (let i = 0; i < items.length; i++) {
		    items[i].querySelector('button').setAttribute('aria-expanded', 'false');
		    items[i].querySelector('.accordion-content').style.maxHeight = null;
		  }

		  // Open the clicked accordion item
		  if (itemToggle === 'false') {
		    this.setAttribute('aria-expanded', 'true');
		    this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
		  }
		}

		// Attach click event listeners to accordion buttons
		items.forEach(function(item) {
		  const button = item.querySelector('button');
		  button.addEventListener('click', toggleAccordion);
		});


	});
