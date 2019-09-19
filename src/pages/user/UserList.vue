<script>
import DefaultPage from '../../defaults/DefaultPage.vue';

export default {
  components: {
    DefaultPage,
  },
  data() {
    return {
      loading: false,
      users: [],
      fields: [
        { prop: 'type', label: '사용자 타입' },
        { prop: 'email', label: '사용자 이메일' },
        { prop: 'inu', label: 'INU 권한', width: '120' },
        { prop: 'admin', label: '관리자 권한', width: '120' },
        { prop: 'date', label: '생성일' },
      ],
    };
  },
  async created() {
    await this.getServiceKeys();
  },
  methods: {
    async getServiceKeys() {
      try {
        const { data } = await this.$api.get('/user');
        this.users = data.map(({
          id, type, name, email, timestamp, student, inu, admin,
        }) => ({
          id,
          type,
          name,
          email,
          student,
          inu: inu ? 'O' : 'X',
          admin: admin ? 'O' : 'X',
          date: this.$moment(timestamp).format('LL'),
        }));
        this.loading = false;
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<template>
  <default-page
    class="user-list"
    icon="el-icon-s-promotion"
    title="사용자 관리"
    desc="INU 사용자 리스트"
    active="2-1-1"
  >
    <template v-slot:main>
      <el-table
        v-loading="loading"
        :data="users"
        empty-text="데이터가 없습니다."
      >
        <el-table-column
          className="user-list__user-name"
          prop="name"
          label="사용자 이름"
        />
        <el-table-column
          v-for="(item, idx) in fields"
          :key="idx"
          :width="item.width"
          :prop="item.prop"
          :label="item.label"
        />
        <el-table-column label="관리">
          <template slot-scope="scope">
            <el-button
              type="info"
              icon="el-icon-s-custom"
              circle plain
            />
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle plain
              @click="deleteKey(scope.row.id)"
              disabled
            />
          </template>
        </el-table-column>
      </el-table>
    </template>
  </default-page>
</template>

<style lang="scss">
.user-list {

  .el-table__row {
    cursor: pointer;
  }

  &__user-name {
    font-weight: bold;
  }
}
</style>
