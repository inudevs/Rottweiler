<script>
export default {
  name: 'GithubCard',
  props: {
    card: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    isPR() {
      return (this.isLoaded)
        ? Object.prototype.hasOwnProperty.call(this.issue, 'pull_request')
        : null;
    },
    state() {
      return this.issue.state === 'open';
    },
    icon() {
      return (this.isPR)
        ? 'fas fa-code-branch'
        : 'fas fa-exclamation-triangle';
    },
    iconColor() {
      const open = this.state;
      return {
        color: open ? '#40c057' : '#adb5bd',
        'font-size': open ? '0.8rem' : '1rem',
        'margin-left': open ? '0.1rem' : '0.2rem',
      };
    },
  },
  data() {
    return {
      issue: {},
      isLoaded: false,
    };
  },
  async created() {
    const { repo, issue } = this.card;
    const url = `https://api.github.com/repos/${repo}/issues/${issue}`;
    try {
      const { data } = await this.$api.get(url, {
        transformRequest: [(req, headers) => {
          // eslint-disable-next-line no-param-reassign
          delete headers.common.Authorization;
          return req;
        }],
      });
      this.issue = data;
      this.isLoaded = true;
    } catch (error) {
      // TODO: fallback for 403 (API rate limit exceeded)
      console.error(error);
    }
  },
  methods: {
    onClick() {
      this.openLink(this.issue.html_url);
    },
    openLink(url) {
      const win = window.open(url, '_blank');
      win.focus();
    },
  },
};
</script>

<template>
  <div
    class="card"
    @click="onClick"
    v-if="isLoaded"
  >
    <div class="card__head">
      <span
        class="card__title"
      >
        <span class="card__icons">
          <i class="card__icon fab fa-github" />
          <i
            class="card__icon"
            :class="icon"
            :style="iconColor"
          />
        </span>
        {{ issue.title }}
        <span
          class="card__label"
          v-for="(label, idx) in issue.labels"
          :key="idx"
        >
          {{ label.name }}
        </span>
      </span>
    </div>
    <div class="card__content">
      <div
        class="card__user"
        @click.stop="openLink(issue.user.html_url)"
      >
        <img
          class="card__avatar"
          :src="issue.user.avatar_url"
        />
        <span class="card__name">
          {{ issue.user.login }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fa-github {
  color: #24292e;
}

.card {
  cursor: pointer;
  background-color: white;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  padding: 0.5rem;
  padding-bottom: 0.4rem;

  &:not(:last-child) {
    margin-bottom: 0.3rem;
  }

  &__title {
    font-size: 1.1rem;
    color: #24292e;
    white-space: normal;
    // word-break: break-all;
  }

  &__icons {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  &__icon {
    margin-right: 0.1rem;
  }

  &__label {
    color: #868e96;
    font-size: 0.8rem;
    border: 1px solid #868e86;
    border-radius: 3px;
    padding: 1px 2px;
  }

  // &__content {
  //   font-size: 0.8rem;
  //   white-space: normal;
  //   word-break: break-all;
  //   line-height: 1.5;
  // }

  &__user {
    display: flex;
    align-items: center;
    padding: 0.1rem 0.2rem;
    border-radius: 5px;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  &__avatar {
    height: 3vh;
    width: 3vh;
    border-radius: 50%;
    margin-right: 0.3rem;
    border: .5px solid #adb5bd;
  }

  &__name {
    color: #495057;
    font-size: 0.9rem;
  }
}
</style>
