<script setup lang="ts">
import { useCopy } from '@/composable/copy';
import { useValidation } from '@/composable/validation';
import { isNotThrowing } from '@/utils/boolean';
import { withDefaultOnError } from '@/utils/defaults';

const encodeInput = ref('Hello world :)');
const encodeOutput = computed(() => withDefaultOnError(() => encodeURIComponent(encodeInput.value), ''));

const encodedValidation = useValidation({
  source: encodeInput,
  rules: [
    {
      validator: value => isNotThrowing(() => encodeURIComponent(value)),
      message: '无法解析此字符串',
    },
  ],
});

const { copy: copyEncoded } = useCopy({ source: encodeOutput, text: '复制成功' });

const decodeInput = ref('Hello%20world%20%3A)');
const decodeOutput = computed(() => withDefaultOnError(() => decodeURIComponent(decodeInput.value), ''));

const decodeValidation = useValidation({
  source: encodeInput,
  rules: [
    {
      validator: value => isNotThrowing(() => decodeURIComponent(value)),
      message: '无法解析此字符串',
    },
  ],
});

const { copy: copyDecoded } = useCopy({ source: decodeOutput, text: '复制成功' });
</script>

<template>
  <c-card title="编码">
    <c-input-text
      v-model:value="encodeInput"
      label="输入 :"
      :validation="encodedValidation"
      multiline
      autosize
      placeholder="请输入要编码的内容"
      rows="2"
      mb-3
    />

    <c-input-text
      label="已编码的内容 :"
      :value="encodeOutput"
      multiline
      autosize
      readonly
      placeholder="已编码的内容"
      rows="2"
      mb-3
    />

    <div flex justify-center>
      <c-button @click="copyEncoded()">
       复制
      </c-button>
    </div>
  </c-card>
  <c-card title="解码">
    <c-input-text
      v-model:value="decodeInput"
      label="输入 :"
      :validation="decodeValidation"
      multiline
      autosize
      placeholder="请输入要解码的内容"
      rows="2"
      mb-3
    />

    <c-input-text
      label="解码的内容 :"
      :value="decodeOutput"
      multiline
      autosize
      readonly
      placeholder="解码的内容"
      rows="2"
      mb-3
    />

    <div flex justify-center>
      <c-button @click="copyDecoded()">
        复制
      </c-button>
    </div>
  </c-card>
</template>
