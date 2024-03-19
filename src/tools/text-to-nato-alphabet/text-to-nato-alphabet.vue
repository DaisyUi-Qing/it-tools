<script setup lang="ts">
import { textToNatoAlphabet } from './text-to-nato-alphabet.service';
import { useCopy } from '@/composable/copy';

const input = ref('');
const natoText = computed(() => textToNatoAlphabet({ text: input.value }));
const { copy } = useCopy({ source: natoText, text: '复制成功' });
</script>

<template>
  <div>
    <c-input-text
      v-model:value="input"
      label="要转换为NATO拼音字母的文本"
      placeholder="请输入..."
      clearable
      mb-5
    />

    <div v-if="natoText">
      <div mb-2>
        您的北约拼音字母文本
      </div>
      <c-card>
        {{ natoText }}
      </c-card>

      <div mt-3 flex justify-center>
        <c-button autofocus @click="copy()">
          复制
        </c-button>
      </div>
    </div>
  </div>
</template>
