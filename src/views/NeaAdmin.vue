<template>
  <div class="nea-admin__wrapper">
    <div class="create-user">
      <b-form-radio-group
        v-model="server"
        class="create-radio"
      >
        <b-form-radio value="dev">개발서버</b-form-radio>
        <b-form-radio value="qa">QA서버</b-form-radio>
      </b-form-radio-group>
      <b-input
        v-model="userId"
        placeholder="사용자 아이디를 입력하세요."
      />
      <b-button
        variant="primary"
        class="create-button"
        @click="handleAddUser"
      >
        사용자 만들기
      </b-button>
      <div
        v-show="loading>0"
      >
        {{ loadingMessage }}
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/api/neaAdmin';
import TokenManager from '@/plugins/TokenManager';

export default {
  name: 'NeaAdmin',
  data: () => ({
    userId: null,
    server: 'dev',
    loading: 0,
    loadingMessage: null,
  }),
  methods: {
    async handleAddUser() {
      try {
        this.loading = 10;
        this.loadingMessage = '토큰을 받아오는 중...';
        if (!this.userId) return;

        await this.util.sleep(3000);

        const response = await api[this.server].auth.getToken();
        TokenManager.set(response.data.body.accessToken);

        this.loading = 50;
        this.loadingMessage = '사용자를 생성하는 중...';

        await this.util.sleep(2000);

        const createResponse = await api[this.server].user.create({
          userId: this.userId,
          userName: this.userId,
          email: `${this.userId}@nexr.com`,
        });

        this.$toasted.global.toast_success('사용자가 생성되었습니다.');
      } catch (e) {
        console.error(e);
        this.$toasted.global.toast_error(this.util.getErrorMessage(e, '사용자 생성에 실패했습니다.'));
      } finally {
        this.loading = 0;
        this.loadingMessage = null;
      }
    },
  },
}
</script>
<style scoped lang="scss">
.nea-admin__wrapper {
  display: flex;
  justify-content: center;
}
.create-user {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  padding: 1rem;

  .create-button {
    margin-top: 1rem;
    width: 100%;
    background-color: $primary;
    border: none;
  }

  .create-radio {
    margin-bottom: 1rem;
  }
}
</style>
