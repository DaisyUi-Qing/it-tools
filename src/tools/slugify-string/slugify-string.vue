<script setup lang="ts">
import slugify from '@sindresorhus/slugify';
import { withDefaultOnError } from '@/utils/defaults';
import { useCopy } from '@/composable/copy';

const input = ref('');
const slug = computed(() => withDefaultOnError(() => slugify(input.value), ''));
const { copy } = useCopy({ source: slug, text: '复制成功' });
</script>

<template>
  <div>
    <c-input-text v-model:value="input" multiline placeholder="输入你要打乱的字符串 (例如: My file path)" label="字符串" autofocus raw-text mb-5 />

    <c-input-text :value="slug" multiline readonly placeholder="打乱结果 (例如: My-file-path)" label="输出结果" mb-5 />

    <div flex justify-center>
      <c-button :disabled="slug.length === 0" @click="copy()">
        复制
      </c-button>
    </div>
  </div>
</template>
