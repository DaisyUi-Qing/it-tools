<script setup lang="ts">
import {
  camelCase,
  capitalCase,
  constantCase,
  dotCase,
  headerCase,
  noCase,
  paramCase,
  pascalCase,
  pathCase,
  sentenceCase,
  snakeCase,
} from 'change-case';
import InputCopyable from '../../components/InputCopyable.vue';

const baseConfig = {
  stripRegexp: /[^A-Za-zÀ-ÖØ-öø-ÿ]+/gi,
};

const input = ref('Java is the best language');

const formats = computed(() => [
  {
    label: '小写:',
    value: input.value.toLocaleLowerCase(),
  },
  {
    label: '大写:',
    value: input.value.toLocaleUpperCase(),
  },
  {
    label: '驼峰命名:',
    value: camelCase(input.value, baseConfig),
  },
  {
    label: '首字母大写:',
    value: capitalCase(input.value, baseConfig),
  },
  {
    label: '常数大小写:',
    value: constantCase(input.value, baseConfig),
  },
  {
    label: '点阵:',
    value: dotCase(input.value, baseConfig),
  },
  {
    label: '标题大小写:',
    value: headerCase(input.value, baseConfig),
  },
  {
    label: '原样输出:',
    value: noCase(input.value, baseConfig),
  },
  {
    label: '参数化:',
    value: paramCase(input.value, baseConfig),
  },
  {
    label: '帕斯卡命名:',
    value: pascalCase(input.value, baseConfig),
  },
  {
    label: '路径:',
    value: pathCase(input.value, baseConfig),
  },
  {
    label: '句子大小写:',
    value: sentenceCase(input.value, baseConfig),
  },
  {
    label: '蛇形命名:',
    value: snakeCase(input.value, baseConfig),
  },
  {
    label: '模拟案例:',
    value: input.value
      .split('')
      .map((char, index) => (index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()))
      .join(''),
  },
]);

const inputLabelAlignmentConfig = {
  labelPosition: 'left',
  labelWidth: '120px',
  labelAlign: 'right',
};
</script>

<template>
  <c-card>
    <c-input-text
      v-model:value="input"
      label="原始字符:"
      placeholder="请输入你的内容..."
      raw-text
      v-bind="inputLabelAlignmentConfig"
    />

    <div my-16px divider />

    <InputCopyable
      v-for="format in formats"
      :key="format.label"
      :value="format.value"
      :label="format.label"
      v-bind="inputLabelAlignmentConfig"
      mb-1
    />
  </c-card>
</template>
