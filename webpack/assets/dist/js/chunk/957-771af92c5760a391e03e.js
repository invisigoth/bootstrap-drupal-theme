"use strict";(self.webpackChunkiconagency=self.webpackChunkiconagency||[]).push([[957],{1957:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var r=a(8420),o=a(7344),n=a(5311),s=a.n(n),i=function(){function e(){(0,r.Z)(this,e),this.init()}return(0,o.Z)(e,[{key:"init",value:function(){var e=this;window.dataLayer=window.dataLayer||[],s()(document).ajaxComplete((function(t,a,r){var o=s()(".webform-progress-tracker .progress-step.is-active"),n=s()(".webform-submission-request-a-translation-form .form-item-category select");if(n.length&&(e.categoryField(n),n.on("change",(function(){e.categoryField(n)}))),o.length)switch(o.attr("data-webform-page")){case"contact_details":dataLayer.push({"form-name":"request-translation-form",event:"form-step-1-org-details"});break;case"translation_request":dataLayer.push({"form-name":"request-translation-form",event:"form-step-2-contact-details"});break;case"review_for_submission":dataLayer.push({"form-name":"request-translation-form",event:"form-step-3-translation-request"}),s()(".webform-submission-request-a-translation-form .webform-button--submit").on("click",(function(){dataLayer.push({"form-name":"request-translation-form",event:"form-submitted"})}))}})),s()(".webform-submission-general-enquiry-form #edit-actions-submit").on("click",(function(){dataLayer.push({"form-name":"contact-form",event:"form-submitted"})}))}},{key:"categoryField",value:function(e){s()(".webform-submission-request-a-translation-form .form-item-category select").on("change",(function(){var t=e.val(),a=s()(".webform-submission-request-a-translation-form .form-submit");e.removeClass("error"),a.removeAttr("disabled"),"Not an Australian Government-subsidised aged care provider"===t&&(e.addClass("error"),a.prop("disabled",!0))}))}}]),e}()}}]);