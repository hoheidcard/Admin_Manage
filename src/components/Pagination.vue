<template>
  <div class="entries">
    Showing <span>{{ getShow().displayStart }}</span> to
    <span>{{ getShow().displayEnd }}</span> of
    <span>{{ totalItem }}</span> entries
  </div>
  <div class="pagination">
    <div class="nav-btn-deactive" v-if="currentPage === 1">Prev</div>
    <span class="nav-btn" @click="goToPage(currentPage - 1)" v-else>
      Prev
    </span>

    <div class="page-name flex" v-for="page in visiblePages" :key="page">
      <button
        v-if="page !== '....' && page !== currentPage"
        class="page"
        type="button"
        :disabled="page.isDisabled"
        @click="goToPage(page)"
        :class="{ active: isPageActive(page) }"
      >
        {{ page }}
      </button>
      <div v-else-if="page === '....'" class="page-dought">
        {{ page }}
      </div>
      <div v-else class="select-wrapper">
        <select v-model="selectedPage" @change="onPageSelect">
          <option v-for="page in totalPagesArray" :key="page" :value="page">
            {{ page }}
          </option>
        </select>
      </div>
    </div>

    <div class="nav-btn-deactive" v-if="currentPage === totalPages">Next</div>
    <span class="nav-btn" @click="goToPage(currentPage + 1)" v-else>
      Next
    </span>
  </div>
</template>
<script setup>
import { computed, getCurrentInstance, ref, watch } from "vue";

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalItem: {
    type: Number,
    required: true,
  },
  itemsPerPage: {
    type: Number,
    required: true,
  },
  visiblePageCount: {
    type: Number,
    default: 3, // Number of visible page buttons
  },
  showEllipsisAfter: {
    type: Boolean,
    default: true, // Whether to show ellipsis after the visible pages
  },
});

let totalPages = ref(Math.ceil(props.totalItem / props.itemsPerPage));
const instance = getCurrentInstance();
const selectedPage = ref(props.currentPage);

const goToPage = (page) => {
  if (page !== "....") {
    if (page < 1 || page > totalPages.value) return;
    instance.emit("update:currentPage", page);
    selectedPage.value = page; // Update the dropdown value
  }
};

function isPageActive(page) {
  return props.currentPage === page;
}

const getShow = () => {
  const displayStart =
    props.totalItem > 0 ? (props.currentPage - 1) * props.itemsPerPage + 1 : 0;
  const displayEnd = Math.min(
    (props.currentPage - 1) * props.itemsPerPage + props.itemsPerPage,
    props.totalItem
  );

  return { displayStart, displayEnd };
};

const visiblePages = computed(() => {
  totalPages.value = Math.ceil(props.totalItem / props.itemsPerPage);
  const currentPage = props.currentPage;
  const visiblePageCount = props.visiblePageCount;
  const showEllipsisAfter = props.showEllipsisAfter;

  if (totalPages.value <= visiblePageCount) {
    return Array.from({ length: totalPages.value }, (_, i) => i + 1);
  }

  const visiblePages = [];

  if (currentPage <= Math.ceil(visiblePageCount / 2)) {
    for (let i = 1; i <= visiblePageCount; i++) {
      visiblePages.push(i);
    }
  } else if (
    currentPage >=
    totalPages.value - Math.floor(visiblePageCount / 2)
  ) {
    for (
      let i = totalPages.value - visiblePageCount + 1;
      i <= totalPages.value;
      i++
    ) {
      visiblePages.push(i);
    }
  } else {
    const start = currentPage - Math.floor(visiblePageCount / 2);
    const end = currentPage + Math.floor(visiblePageCount / 2);
    for (let i = start; i <= end; i++) {
      visiblePages.push(i);
    }
  }

  if (showEllipsisAfter && currentPage > 1) {
    visiblePages.unshift("....");
  }

  if (showEllipsisAfter && currentPage + 1 < totalPages.value) {
    visiblePages.push("....");
  }

  return visiblePages;
});

const totalPagesArray = computed(() => {
  return Array.from({ length: totalPages.value }, (_, i) => i + 1);
});

const onPageSelect = () => {
  goToPage(selectedPage.value);
};

watch(
  () => props.currentPage,
  (newPage) => {
    totalPages.value = Math.ceil(props.totalItem / props.itemsPerPage);
    selectedPage.value = newPage; // Sync the dropdown with the current page
    if (!visiblePages.value.includes(newPage)) {
      goToPage(visiblePages.value[0]);
    }
  }
);
</script>
<style lang="scss">
.select-wrapper {
  display: inline-block;
  position: relative;
}

select {
  width: 3rem;
  max-height: 3rem;
  padding: 0.4rem;
  border-radius: 0.2rem;
  border: 1px solid var(--blue);
  background-color: #fff;
  color: var(--blue);
  font-size: 1rem;
  appearance: none;
  cursor: pointer;
}

/* Custom scrollbar for the dropdown */
select::-webkit-scrollbar {
  width: 0.3rem;
}

select::-webkit-scrollbar-thumb {
  background-color: var(--blue);
  border-radius: 0.25rem;
}

select::-webkit-scrollbar-track {
  background-color: #f1f1f1;
  border-radius: 0.25rem;
}

.select-wrapper select::-ms-expand {
  display: none;
}
</style>
