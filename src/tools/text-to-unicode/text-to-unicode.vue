<script setup lang="ts">
import { convertTextToUnicode, convertUnicodeToText } from './text-to-unicode.service';
import { useCopy } from '@/composable/copy';

const inputText = ref('');
const unicodeFromText = computed(() => inputText.value.trim() === '' ? '' : convertTextToUnicode(inputText.value));
const { copy: copyUnicode } = useCopy({ source: unicodeFromText });

const inputUnicode = ref('');
const textFromUnicode = computed(() => inputUnicode.value.trim() === '' ? '' : convertUnicodeToText(inputUnicode.value));
const { copy: copyText } = useCopy({ source: textFromUnicode });
</script>

<template>
  <c-card title="文本转Unicode">
    <c-input-text v-model:value="inputText" multiline placeholder="例如 'Hello Avengers'" label="输入要转换为 unicode 的文本" autosize autofocus raw-text test-id="text-to-unicode-input" />
    <c-input-text v-model:value="unicodeFromText" label="转换后的内容" multiline raw-text readonly mt-2 placeholder="转换后的Unicode内容" test-id="text-to-unicode-output" />
    <div mt-2 flex justify-center>
      <c-button :disabled="!unicodeFromText" @click="copyUnicode()">
        复制
      </c-button>
    </div>
  </c-card>

  <c-card title="Unicode转文本">
    <c-input-text v-model:value="inputUnicode" multiline placeholder="输入Unicode" label="输入 unicode 以转换为文本" autosize raw-text test-id="unicode-to-text-input" />
    <c-input-text v-model:value="textFromUnicode" label="转换后的内容" multiline raw-text readonly mt-2 placeholder="转换后的文本内容" test-id="unicode-to-text-output" />
    <div mt-2 flex justify-center>
      <c-button :disabled="!textFromUnicode" @click="copyText()">
        复制
      </c-button>
    </div>
  </c-card>
</template>
