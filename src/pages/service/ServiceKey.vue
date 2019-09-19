<script>
import DefaultPage from '../../defaults/DefaultPage.vue';

export default {
  components: {
    DefaultPage,
  },
  data() {
    return {
      loading: true,
      keys: [],
      modal: {
        create: false,
      },
    };
  },
  computed: {
    serviceID() {
      return this.$route.params.serviceID;
    },
  },
  async created() {
    await this.getServiceKeys();
  },
  methods: {
    async getServiceKeys() {
      try {
        const { data } = await this.$api.get(`/service/${this.serviceID}/key`);
        this.keys = data.map(({ id, latest, timestamp }) => ({
          id,
          latest: this.$moment(latest).fromNow(),
          date: this.$moment(timestamp).format('LLL'),
        }));
        this.loading = false;
      } catch (err) {
        const { message } = err.response.data;
        await this.$swal('에러!', message, 'error');
      }
    },
    async createKey() {
      try {
        await this.$api.post(`/service/${this.serviceID}/key`);
        this.modal.create = false;
        this.$swal(
          '새로운 API 키를 생성했습니다!',
          '지금 바로 이용하실 수 있습니다.',
          'success',
        );
        await this.getServiceKeys();
      } catch (err) {
        const { message } = err.response.data;
        await this.$swal('에러!', message, 'error');
      }
    },
  },
};
</script>

<template>
  <default-page
    class="service-key"
    icon="el-icon-s-promotion"
    title="서비스 정보"
    desc="서비스 관리 및 API 키"
    active="2-2-1"
  >
    <template v-slot:main>
      <el-table
        :data="keys"
        empty-text="데이터가 없습니다."
      >
        <el-table-column
          className="service-key__api-key"
          prop="id"
          label="API 키"
        />
        <el-table-column prop="latest" label="최근 사용" />
        <el-table-column prop="date" label="생성일" />
      </el-table>
      <el-row class="service-key__buttons">
        <el-popover
          placement="top-start"
          title="새로운 API 키 생성하기"
          width="200"
          trigger="hover"
          content="통합 API 및 프록시를 사용하기 위해 서비스의 API 키를 생성하고 사용할 수 있습니다.">
          <el-button
            slot="reference"
            class="service-key__button"
            type="primary"
            icon="el-icon-plus"
            circle
            @click="modal.create = true"
          />
        </el-popover>
      </el-row>

      <el-dialog
        class="service-key__modal"
        title="서비스 API 키 생성"
        :visible.sync="modal.create"
        :before-close="handleClose"
      >
        <p>새로운 API 키를 생성합니다.</p>
        <span slot="footer" class="dialog-footer">
          <el-button
            @click="dialogVisible = false"
          >
            취소
          </el-button>
          <el-button
            type="primary"
            @click="createKey()"
          >
            생성
          </el-button>
        </span>
      </el-dialog>
    </template>
  </default-page>
</template>

<style lang="scss">
.service-key {

  .el-table__row {
    cursor: pointer;
  }

  &__api-key {
    font-weight: bold;
  }

  &__buttons {
    position: absolute !important;
    bottom: 1rem;
  }

  &__button {

    i {
      font-size: 1.5rem;
    }
  }

  &__modal {

    p {
      margin: 0;
    }
  }
}
</style>
