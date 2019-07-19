import React, { Fragment } from 'react';

import { ScrollView } from 'react-native'

import { BaseScreen } from '../base/base.screen';

import { ReportItem, Loader } from '../../components'

import { Filter } from './components/filter.component'

import { ReportsService, StorageService } from '@services'

export class FeedScreen extends BaseScreen {
  static navigationOptions = {
    title: 'Feed',
    headerTitleStyle: {
      textAlign: "center",
      flex: 1
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      reports: [],
      searchedTag: '',
      filterReports: [],
      isLoading: false
    }
    this.reportsService = new ReportsService()
  }

  screenDidFocus() {
    StorageService.getObject('reports').then(reports => {
      this.setState({ reports })
    })
  }

  componentDidMount() {
    super.componentDidMount()
    try {
      this._toggleLoading()
      this.reportsService.getAll().then(reports => {
        this.setState({reports})
        this._toggleLoading()
        StorageService.setObject('reports', this.state.reports)
      })
    } catch (error) {
      alert(error)
    }
  }

  _changeStatus = (status, id) => {
    StorageService.getObject('reports').then(reports => {
      this._toggleLoading()
      const newReports = this.state.reports
      newReports[id].status = status
      StorageService.setObject('reports', newReports)
      StorageService.getObject('reports').then(reports => {
        this.setState({ reports })
        this._toggleLoading()
      })
    })
  }

  _onFilterChange = (filtrosAtivos) => {
    this._toggleLoading()
    StorageService.getObject('reports').then(reports => {
      const filteredReports = reports.filter(report => filtrosAtivos.includes(report.status))
      this.setState({
        reports: filtrosAtivos.length ? filteredReports : reports
      })
      this._toggleLoading()
    })
  }

  _onSearchInputPress = () => {
    this._toggleLoading()
    StorageService.getObject('reports').then(reports => {
      const searchedReports = reports.filter(report => report.tags.includes(this.state.searchedTag))
      this.setState({
        reports: this.state.searchedTag ? searchedReports : reports
      })
      this._toggleLoading()
    })
  }

  _handleChanger = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  _toggleLoading() {
    this.setState({ isLoading: !this.state.isLoading })
  }

  _renderReports = () => {
    const { reports } = this.state

    return (
      <ScrollView style={{overflow: 'visible'}}>
        {reports.map((report, index) => (
          <ReportItem key={index} onChangeStatus={(status) => this._changeStatus(status, index)} {...report} />
        ))}
      </ScrollView>
    )
  }

  renderContent() {
    return (
      <Fragment>
        {this.state.isLoading ? <Loader /> : null}
        <Filter
          onFilterChange={this._onFilterChange}
          onSearchInputPress={this._onSearchInputPress}
          value={this.state.searchedTag}
          onChangeText={(value) => this._handleChanger('searchedTag', value)}
        />
        {this._renderReports()}
      </Fragment>
    )
  }
}
