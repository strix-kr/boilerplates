<template>
  <div>
    <virtual-list :size="100" :remain="10">
      <a-list :grid="{ gutter: 16, column: 4 }" :dataSource="data">
        <a-list-item slot="renderItem" slot-scope="item">
            <a-card :title="item.title" @click="toggleModal(item.id)"/>
        </a-list-item>
      </a-list>
    </virtual-list>

    <a-modal
      okText="Remove"
      cancelText="close"
      :title="modal.title"
      :visible="modal.visible"
      :width="modalWidth"
      @ok="onRemoveItem"
      @cancel="toggleModal"
    >
      <div class="modalTitle">Content</div>
      <a-card class="modalCard">
        <template v-slot:extra>
          {{modal.content}}
        </template>
      </a-card>

      <div class="modalTitle">Child</div>
      <a-card class="modalCard">
          <template v-slot:extra>
          <virtual-list :size="100" :remain="5">
              <a-card
              v-for="item of modal.data" 
              :key="item.id"
              :bodyStyle="modal.bodyStyle"
              >
              {{item}}
              </a-card>
          </virtual-list>
          </template>
      </a-card>
    </a-modal>
  </div>
</template>
<script>
import virtualList from 'vue-virtual-scroll-list'
import { api, fetcher, util } from '@/configs'

  export default {
    name: 'Content',
    components: {
      'virtual-list': virtualList,
    },
    props: {
      type: {
        type: String,
        default: null,
      }
    },
    data() {
      return {
        data: [],
        modal: {},
        initModal: {
          id: 0,
          title: '',
          content: '',
          visible: false,
          data: [],
          bodyStyle: {
            margin: '5px 0px',
          },
        },
      }
    },
    mounted () {
      this.initModalData()

      const { url, endPoint, child } = api[this.type]()
      
      fetcher
      .get(url)
      .then((res) => {
        if(res.status !== 200){
          console.warn(res)
          alert('fail data load')
          return
        }

        this.data = res.data.map(el => {
          el.endPoint = endPoint
          el.child = child
          return el
        })
      })
      .catch(error => {
        console.error(error)
        alert('data load error')
      })
    },
    computed: {
      modalWidth () {
        return `${100/3}%`
      },
    },
    methods: {
      toggleModal (id) {
        this.modal.visible = !this.modal.visible
        // when open modal
        if(this.modal.visible){
          this.setModalData(id)
        } else {
          this.initModalData()
        }
      },
      initModalData () {
        this.modal = {...this.initModal}
      },
      setModalData (id) {
        const selectedItem = this.data.find(el => el.id === id)
        if( !selectedItem ){
            return
        }

        this.modal.id = selectedItem.id
        this.modal.title = selectedItem.title
        this.modal.content = selectedItem

        const child = selectedItem.child
        if (child) {
            const { url } = api[child](id)
            this.getChildData(url)
        }
      },
      getChildData (url) {
        fetcher
        .get(url)
        .then(res => {
          if(res.status !== 200){
              console.warn('fail')
              alert('fail')
              return
          }
          
          this.modal.data = res.data
        })
        .catch(error => {
            console.error(error)
            alert('error')
        })
      },
      onRemoveItem () {
        const id = this.modal.id
        const { url } = api.posts(id)

        fetcher
        .delete(url)
        .then(res => {
            if(res.status !== 200){
                console.warn(res)
                alert('fail data remove')
                return
            }
            
            alert(`success!`)
        })
        .catch(error => {
            console.error(error)
            alert('error')
        })
      },
    }
  };
</script>
<style lang="scss" scoped>
.modalCard .ant-card.ant-card-bordered{
  margin: 7px 0px;
}

.ant-card-bordered:not(.modalCard){
    cursor: pointer;

    &:hover{
      box-shadow: 1px 1px 3px black;
    }

    &:active{
      box-shadow: 0px 0px 0px;
    }
}

.ant-modal-footer{
  display: none !important;
}

.modalTitle{
  padding-top: 10px;
  font-size: 20px;
}

.modalCard{
  padding: 5px;
}

</style>>
