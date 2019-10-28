<template>
  <div class="home">
    <div>home</div>
    <div @click="go_about">go_about</div>
    <div>computed: {{cptA}}</div>
    <div>props: {{axx}}</div>
    <div @click="addData">add data</div>
    <div>data: {{data}}</div>
    <div>vuex: {{username}}</div>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </div>
</template>

<script lang='ts'>
// @ is an alias to /src
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
// import { State, Getter, Action, Mutation, namespace } from "vuex-class";

@Component({
  name: "Home",
  watch: {
    data(newVal: number, oldVal: number): void {
      console.log(newVal, oldVal);
    },
    $route(newVal: number, oldVal: number): void {
      console.log("route-change");
    }
  }
})
export default class Home extends Vue {
  @Prop({ default: 1 }) axx!: number;
  routeChange() {
    console.log("routechange");
  }
  // initial data
  public data = 10;
  // use prop values for initial data
  public setC = this.axx + 1;
  // method
  public go_about(): void {
    this.$router.push("/about");
  }
  public addData(): void {
    this.data++;
    this.$store.dispatch("setUsername", 1);
  }
  // lifecycle hook
  mounted(): void {
    // console.log(this.$attrs);
    this.axios
      .get("xxx")
      .then((res: any) => console.log(res))
      .catch((err: any) => err);
  }
  // computed
  get cptA() {
    return this.axx + 1;
  }
  get username() {
    return this.$store.state.username;
  }

  // // Props
  // @Prop()
  // a: number;
  // // watch
  // @Watch("data")
  // change(newVal: number, oldVal: number): void {
  //   console.log(newVal, oldVal);
  // }
}
</script>
