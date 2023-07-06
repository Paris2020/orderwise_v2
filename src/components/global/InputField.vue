<script setup>
    import { reactive } from 'vue';

    const props = defineProps({
        label: String,
    });

    const state = reactive({
        inputValue: ""
    });

</script>

<template>
    <div id="input-field">
        <label class="input-wrapper">
            <input type="text" name="title[]" class="form-input" :class="{'move-up': state.inputValue.length}" v-model="props.inputValue">
            <span class="input-label">{{ props.label }}</span>
        </label>
        <button id="remove-row" type="button" class="btn unclear small">Remove</button>
    </div>
</template>
