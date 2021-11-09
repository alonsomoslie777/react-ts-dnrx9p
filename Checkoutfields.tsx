import React, { Component } from 'react';
import Info from './Info';

class Checkoutfields extends Info {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en',
      listLanguages: ['en', 'it', 'ro'],
    };
  }

  render() {
    return (
      <div class="col-md-12">
        <div class="card">
          <form class="formSave" action="#" method="POST">
            <input type="hidden" name="fieldsType" value={'fieldsType'} />
            <div class="col-md-6">
              <h3> {'title'}</h3>
            </div>
            <div class="col-md-6 text_align_right">
              <input
                type="submit"
                class="btn btn_small"
                value={this.l('Update')}
              />
            </div>
            <div class="col-md-12 text_align_right"></div>

            <div class="content table-responsive table-full-width">
              <table class="table table-hover table-striped">
                <tbody>
                  <tr>
                    <td></td>
                    <td id="edit_title" style={{ verticalAlign: 'middle' }}>
                      <div
                        class="edit_text"
                        style={{
                          display: 'inline-table',
                          fontWeight: 'bold',
                          fontSize: '20px',
                        }}
                      >
                        title
                      </div>
                      <div class="hide_edit blockMultilang">
                        <br />
                        {this.state.listLanguages.map((lang) => (
                          <>
                            <span class="inputLang"> </span>
                            <input
                              type="text"
                              class="form-control show_edit"
                              name={'title[' + lang + ']'}
                            />
                          </>
                        ))}
                      </div>
                    </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td style={{ verticalAlign: 'middle' }}>
                      <a href="#" class="fa_edit">
                        {' '}
                      </a>
                    </td>
                  </tr>

                  <tr class="options_each enabled_option">
                    <td style={{ verticalAlign: 'middle' }}>
                      <label class="switch show_edit">
                        <input
                          type="checkbox"
                          class="checkbox show_edit"
                          name="key[enable]"
                          value="yes"
                        />
                        <span class="slider round"></span>
                      </label>
                    </td>
                    <td style={{ verticalAlign: 'middle' }}>
                      <div
                        class="edit_text"
                        style={{ display: 'inline-table' }}
                      >
                        title
                      </div>
                      <label class="hide_edit blockMultilang">
                        title <br />
                        {this.state.listLanguages.map((lang) => (
                          <>
                            <span class="inputLang">{lang} </span>
                            <input
                              type="text"
                              class="form-control show_edit"
                              name={'key[title][' + lang + ']'}
                            />
                          </>
                        ))}
                      </label>
                    </td>
                    <td style={{ verticalAlign: 'middle' }}>
                      <label class="show_edit">{this.l('Show title')}</label>
                      <br />
                      <label class="switch show_edit">
                        <input
                          type="checkbox"
                          class="checkbox show_edit"
                          name={'key[showTitle]'}
                          value="yes"
                        />
                        <span class="slider round"></span>
                      </label>
                    </td>
                    <td style={{ verticalAlign: 'middle' }}>
                      <label class="show_edit">{this.l('Required')}</label>
                      <br />
                      <label class="switch show_edit">
                        <input
                          type="checkbox"
                          class="checkbox show_edit"
                          name={'key[required]'}
                          value="yes"
                        />
                        <span class="slider round"></span>
                      </label>
                    </td>
                    <td style={{ verticalAlign: 'middle' }}>
                      <div class="edit_text"> {this.l('Field width')} </div>
                      <label class="hide_edit hide_edit">
                        {this.l('Field width')} <br />
                        <select
                          name={'key[boxLength]'}
                          class="form-control show_edit"
                        >
                          <option value="half">{this.l('Half')}</option>
                          <option value="full">{this.l('Full')}</option>
                        </select>
                      </label>
                    </td>
                    <td style={{ verticalAlign: 'middle' }}>
                      <div class="edit_text"> {this.l('Field Type Box')} </div>
                      <label class="hide_edit hide_edit">
                        {this.l('Field Type Box')} <br />
                        <select
                          name={'key[boxType]'}
                          class="form-control show_edit"
                        >
                          <option value="textbox">{this.l('Textbox')}</option>
                          <option value="textarea">{this.l('Textarea')}</option>
                        </select>
                      </label>
                    </td>
                    <td style={{ verticalAlign: 'middle' }}>
                      <a href="#" class="fa_edit">
                        {' '}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-12 text_align_right">
              <input
                type="submit"
                class="btn btn_small"
                value={this.l('Update')}
              />
            </div>
            <div class="height15px"></div>
          </form>
        </div>
      </div>
    );
  }
}

export default Checkoutfields;
