<script setup lang="ts">
import { convertAsciiBinaryToText, convertTextToAsciiBinary } from './text-to-binary.models';
import { withDefaultOnError } from '@/utils/defaults';
import { useCopy } from '@/composable/copy';
import { isNotThrowing } from '@/utils/boolean';

const inputText = ref('');
const binaryFromText = computed(() => convertTextToAsciiBinary(inputText.value));
const { copy: copyBinary } = useCopy({ source: binaryFromText });

const inputBinary = ref('');
const textFromBinary = computed(() => withDefaultOnError(() => convertAsciiBinaryToText(inputBinary.value), ''));
const inputBinaryValidationRules = [
  {
    validator: (value: string) => isNotThrowing(() => convertAsciiBinaryToText(value)),
    message: '二进制应为有效的 ASCII 二进制字符串，具有 8 位的倍数',
  },
];
const { copy: copyText } = useCopy({ source: textFromBinary });
</script>

<template>
  <c-card title="文本转 ASCII 二进制文件">
    <c-input-text v-model:value="inputText" multiline placeholder="例如 'Hello world'" label="输入要转换为二进制的文本" autosize autofocus raw-text test-id="text-to-binary-input" />
    <c-input-text v-model:value="binaryFromText" label="转换后的二进制" multiline raw-text readonly mt-2 placeholder="文本转换后的二进制" test-id="text-to-binary-output" />
    <div mt-2 flex justify-center>
      <c-button :disabled="!binaryFromText" @click="copyBinary()">
        复制
      </c-button>
    </div>
  </c-card>

  <c-card title="ASCII 二进制文件转文本">
    <c-input-text v-model:value="inputBinary" multiline placeholder="例如 '01001000 01100101 01101100 01101100 01101111'" label="输入二进制文件以转换为文本" autosize raw-text :validation-rules="inputBinaryValidationRules" test-id="binary-to-text-input" />
    <c-input-text v-model:value="textFromBinary" label="转换后的文本" multiline raw-text readonly mt-2 placeholder="转换后的文本" test-id="binary-to-text-output" />
    <div mt-2 flex justify-center>
      <c-button :disabled="!textFromBinary" @click="copyText()">
       复制
      </c-button>
    </div>
  </c-card>
</template>
