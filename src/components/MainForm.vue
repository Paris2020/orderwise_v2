<script setup>
    import InputField from "./global/InputField.vue";
    import { reactive } from "vue"
    
</script>

<template>
    <div class="custom-form">
        <header class="header">
            <img src="/images/logo.png" alt="logo" />
        </header>
        <div class="wrapper">

            <h2>Please give your feedback below</h2>

            <div class="text-blocks">
                <dl class="text-block">
                    <dt>01. Click 'New line' if you need more space.</dt>
                    <dd></dd>
                </dl>
                <dl class="text-block">
                    <dt>02. Click 'X' to remove the current line.</dt>
                    <dd></dd>
                </dl>
                <dl class="text-block">
                    <dt>03. Your review must be at least 50 characters but no more than 1000 characters.</dt>
                    <dd></dd>
                </dl>
            </div>

            <form method="post" id="feedback">
                <div class="row">
                    <div class="input-fields">
                        <!--COMPONENT.input-field -->
                        <input-field></input-field>

                        <div id="new-row" class="new-row"></div>
                        <button id="add-row" type="button" class="btn unclear large">Add Row</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
