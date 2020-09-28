<template>
    <v-container>
        <v-file-input
          show-size
          label="Загрузить файл"
          @change="selectFile"
        ></v-file-input>
        <v-snackbar
        v-for="(snackbar, index) in snackbars.filter(f=>f.showing)"
        v-model="snackbar.showing"
        :key="snackbar.text + Math.random()"
        :color="snackbar.color"
        :timeout="15000"
        :right="true"
        :style="`padding-bottom:${index*60}px`">
        {{snackbar.text}}
        <template v-slot:action="{ attrs }">
          <v-btn
            dark
            text
            v-bind="attrs"
            @click="snackbar.showing = false"
          >x</v-btn>
        </template>
      </v-snackbar>
    </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapActions, mapState, mapMutations } from 'vuex';
@Component({
    computed:{
        ...mapState(['snackbars'])
    }
})
export default class LoadFile extends Vue {
    fileload:any;
    showloadfile:boolean = false;
    constructor() {
        super();
    }
    selectFile(file:any){
        if(file == undefined || file == null)
            return;
        this.fileload = file;
        this.showloadfile = true;
        this.$store.dispatch('fileload/loadfile',this.fileload).then(
            (response)=>{
                //this.$store.dispatch("setSnackbar", {
                //  showing: true,
                //  text: JSON.stringify(response.data),
                //  color: "success",
                //});

                let color =['success','info','warning'];
                let i =0 ;
                response.data.forEach((element:any) => {
                    //console.log(element);
                    //console.log(JSON.stringify(element));
                    this.$store.dispatch("setSnackbar", {
                        showing: true,
                        text: JSON.stringify(element),
                        color: color[i],
                    });
                    i++;
                });
            },
            (error)=>{
                console.log(error);
            }
        );
    }
}
</script>