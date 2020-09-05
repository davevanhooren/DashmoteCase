<template>
  <div class="overview">
    <div>
    <a-button class="add-button" @click="handleAdd">
      Add
    </a-button>
    <a-table bordered :data-source="dataSource" :columns="columns">
      <!--<template slot="name" slot-scope="text, record">
        <editable-cell :text="text" @change="onCellChange(record.key, 'name', $event)" />
      </template>-->
      <template slot="operation" slot-scope="text, record">
        <a-popconfirm
          v-if="dataSource.length"
          title="Sure to delete?"
          @confirm="() => onDelete(record.key)">
          <a href="javascript:;">Delete</a>
        </a-popconfirm>
      </template>
    </a-table>
  </div>
  </div>
</template>

<script src=".././scripts/dashboardoverview.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src=".././assets/styles/dashboardoverview.css" scoped></style>
