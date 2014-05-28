angular.module('builder.wizard', ['builder', 'validator.rules']).config(
    function($builderProvider) {
        var template = "";
        template += "<div class=\"form-group\">";
        template += " <label for=\"{{formName+index}}\" class=\"col-md-4 control-label\" ng-class=\"{'fb-required':required}\">{{label}}<\/label>";
        template += "    <div class=\"col-md-8\">";
        template += "        <div class=\"splitter\"><\/div>";
        template += "        <p class='help-block'>{{description}}<\/p>";
        template += "        ";
        template += "    <\/div>";
        template += "";
        template += "<\/div>";
        var popoverTemplate = "";
        popoverTemplate += "<form>";
        popoverTemplate += "    <div class=\"form-group\">";
        popoverTemplate += "        <label class='control-label'>Label<\/label>";
        popoverTemplate += "        <input type='text' ng-model=\"label\" validator=\"[required]\" class='form-control'\/>";
        popoverTemplate += "    <\/div>";
        popoverTemplate += "    <div class=\"form-group\">";
        popoverTemplate += "        <label class='control-label'>Description<\/label>";
        popoverTemplate += "        <input type='text' ng-model=\"description\" class='form-control'\/>";
        popoverTemplate += "    <\/div>";
        popoverTemplate += "    <div class=\"form-group\">";
        popoverTemplate += "        <label class='control-label'>Placeholder<\/label>";
        popoverTemplate += "        <input type='text' ng-model=\"placeholder\" class='form-control'\/>";
        popoverTemplate += "    <\/div>";
        popoverTemplate += "    <div class=\"checkbox\">";
        popoverTemplate += "        <label>";
        popoverTemplate += "            <input type='checkbox' ng-model=\"required\" \/>";
        popoverTemplate += "            Required<\/label>";
        popoverTemplate += "    <\/div>";
        popoverTemplate += "    <div class=\"form-group\" ng-if=\"validationOptions.length > 0\">";
        popoverTemplate += "        <label class='control-label'>Validation<\/label>";
        popoverTemplate += "        <select ng-model=\"$parent.validation\" class='form-control' ng-options=\"option.rule as option.label for option in validationOptions\"><\/select>";
        popoverTemplate += "    <\/div>";
        popoverTemplate += " ";
        popoverTemplate += "";
        popoverTemplate += "    <hr\/>";
        popoverTemplate += "    <div class='form-group'>";
        popoverTemplate += "        <input type='submit' ng-click=\"popover.save($event)\" class='btn btn-primary' value='Save'\/>";
        popoverTemplate += "        <input type='button' ng-click=\"popover.cancel($event)\" class='btn btn-default' value='Cancel'\/>";
        popoverTemplate += "        <input type='button' ng-click=\"popover.remove($event)\" class='btn btn-danger' value='Delete'\/>";
        popoverTemplate += "    <\/div>";
        popoverTemplate += "<\/form>";


        $builderProvider.registerComponent('spilitter', {
            group: 'wizard',
            label: 'Spilitter',
            description: 'Wizard Spilitter',
            placeholder: 'placeholder',
            required: false,
            template: template,
            popoverTemplate: popoverTemplate
        });
    }
);
