import * as $ from "jquery";
import "bootstrap-datepicker/dist/js/bootstrap-datepicker.min";
import "bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css";

export default (function () {
  $(".start-date").datepicker();
  $(".end-date").datepicker();
}());
