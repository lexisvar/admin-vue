<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader> <CIcon icon="cil-drop" /> Players </CCardHeader>
        <CCardBody>
          <CRow>
            <CForm class="row row-cols-lg-auto g-3 align-items-center">
              <CCol xs="12">
                <CFormLabel
                  class="visually-hidden"
                  for="inlineFormInputGroupUsername"
                  >Username</CFormLabel
                >
                <CInputGroup>
                  <CInputGroupText>
                    <CIcon class="mx-2" icon="cil-user" />
                  </CInputGroupText>
                  <CFormInput
                    v-model="search"
                    id="inlineFormInputGroupUsername"
                    placeholder="Name or FIDE ID"
                  />
                </CInputGroup>
              </CCol>
              <CCol xs="12">
                <el-select
                  v-model="country"
                  filterable
                  placeholder="Country"
                  @change="getPlayers"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </CCol>
              <CCol xs="12">
                <CFormCheck
                  type="checkbox"
                  id="inlineFormCheck"
                  label="Remember me"
                />
              </CCol>
              <CCol xs="12">
                <CButton type="submit" @click="getPlayers">Submit</CButton>
              </CCol>
            </CForm>
          </CRow>
          <CRow>
            <CTable striped hover>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Country</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Rating</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Blitz Rating</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Rapid Rating</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Sex</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Age</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow v-for="(player, i) in players" :key="i">
                  <CTableHeaderCell scope="row">{{ i + 1 }}</CTableHeaderCell>
                  <CTableDataCell>{{ player.country }}</CTableDataCell>
                  <CTableDataCell>{{ player.name }}</CTableDataCell>
                  <CTableDataCell>{{ player.fideid }}</CTableDataCell>
                  <CTableDataCell>{{ player.title }}</CTableDataCell>
                  <CTableDataCell>{{ player.rating }}</CTableDataCell>
                  <CTableDataCell>{{ player.blitz_rating }}</CTableDataCell>
                  <CTableDataCell>{{ player.rapid_rating }}</CTableDataCell>
                  <CTableDataCell>{{ player.sex }}</CTableDataCell>
                  <CTableDataCell>{{ player.birthday }}</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CRow>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import Players from '~/services/players'
export default {
  name: 'Players',
  data() {
    return {
      players: [],
      loading: false,
      search: '',
      options: [
        {
          value: '',
          label: '---',
        },
        {
          value: 'COL',
          label: 'COLOMBIA',
        },
        {
          value: 'usa',
          label: 'USA',
        },
      ],
      country: null,
    }
  },
  created() {
    this.getPlayers()
  },
  methods: {
    async getPlayers() {
      try {
        this.loading = true

        let params = {
          search: this.search ? this.search : null,
          country: this.country ? this.country : null,
        }

        const { data } = await Players.getPlayers(params)
        this.players = data
        this.loading = false
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>
