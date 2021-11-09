import React, { Component } from 'react';
import Info from './Info';

class Checkoutfields extends Info {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en',
      listLanguages: ['en', 'it'],
      fields: JSON.parse(
        '{"title":"Shipping Address","name":"First Name","lastname":"Last Name","email":"Email","phone":"Phone","country":"Country","address":"Address","address2":"Address 2","zip":"Zip / Postal Code","city":"City","county":"County","state":"State","company_name":"Company name","fax":"Fax","order_notes":"Order notes"}'
      ),
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
                    <td
                      id="edit_title"
                      style={{ verticalAlign: 'middle' }}
                      colspan="2"
                    >
                      <div class="blockMultilang">
                        <label>{this.l('Header')} </label>
                        <br />
                        {this.state.listLanguages.map((lang) => (
                          <>
                            <span class="inputLang"> {lang} </span>
                            <input
                              type="text"
                              class="form-control show_edit"
                              name={'title[' + lang + ']'}
                            />
                          </>
                        ))}
                      </div>
                    </td>
                    <td colspan="3"></td>
                  </tr>
                  {Object.entries(this.state.fields).map(([key, value], i) => (
                    <>
                      {key == 'title' ? (
                        <></>
                      ) : (
                        <tr
                          id={'edit_' + key}
                          class="options_each enabled_option"
                        >
                          <td style={{ verticalAlign: 'middle' }}>
                            <label class="switch show_edit">
                              <input
                                type="checkbox"
                                class="checkbox show_edit"
                                name={key + '[enable]'}
                                value="yes"
                              />
                              <span class="slider round"></span>
                            </label>
                          </td>
                          <td style={{ verticalAlign: 'middle' }}>
                            <label class=" blockMultilang">
                              {value} <br />
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
                            <label class="show_edit">
                              {this.l('Show title')}
                            </label>
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
                            <label class="show_edit">
                              {this.l('Required')}
                            </label>
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
                            <label>
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
                            <label>
                              {this.l('Field Type Box')} <br />
                              <select
                                name={'key[boxType]'}
                                class="form-control show_edit"
                              >
                                <option value="textbox">
                                  {this.l('Textbox')}
                                </option>
                                <option value="textarea">
                                  {this.l('Textarea')}
                                </option>
                              </select>
                            </label>
                          </td>
                        </tr>
                      )}
                    </>
                  ))}
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
