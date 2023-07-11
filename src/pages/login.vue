<template>
  <div>
    <a-form
      layout="inline"
      :model="formState"
      @finish="handleFinish"
      @finishFailed="handleFinishFailed"
    >
      <a-form-item>
        <a-input v-model="formState.user" placeholder="Username"></a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-model="formState.password"
          type="password"
          placeholder="Password"
        ></a-input>
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          :disabled="formState.user === '' || formState.password === ''"
        >
          Log in
        </a-button>
      </a-form-item>
    </a-form>
    <a-mentions v-model="value" autofocus @select="onSelect">
      <a-mentions-option value="afc163">afc163</a-mentions-option>
      <a-mentions-option value="zombieJ">zombieJ</a-mentions-option>
      <a-mentions-option value="yesmeck">yesmeck</a-mentions-option>
    </a-mentions>
    <h5>{{ userStore.name }}</h5>
    <h3>Mouse: {{ x }} x {{ y }}</h3>
    <a-space wrap>
      <a-button type="primary">Primary Button</a-button>
      <a-button>Default Button</a-button>
      <a-button type="dashed">Dashed Button</a-button>
      <a-button type="text">Text Button</a-button>
      <a-button type="link">Link Button</a-button>
    </a-space>
  </div>
</template>
<script lang="ts" setup>
import type { UnwrapRef } from 'vue';
interface FormState {
  user: string;
  password: string;
}
import { useMouse } from '@vueuse/core';
import { useUserStore } from '../store/user';
const userStore = useUserStore();
userStore.updateName('李四');
const { x, y } = useMouse();
const formState: UnwrapRef<FormState> = reactive({
  user: '',
  password: '',
});
const handleFinish = (values: Object) => {
  console.log(values, formState);
};
const handleFinishFailed = (errors: Object) => {
  console.log(errors);
};
//
const value = ref<string>('@afc163');
watch(value, () => {
  console.log('value', value);
});
const onSelect = (option: { value: string }) => {
  console.log('select', option);
};
</script>
<style lang="scss" scoped></style>
