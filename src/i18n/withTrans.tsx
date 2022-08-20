import React, { Component } from "react";
import i18next from "./config";
import { I18nextProvider, withTranslation } from "react-i18next";

// a higher order component
export function withTrans(WrappedComponent: any) {
  WrappedComponent = withTranslation()(WrappedComponent);

  return class extends Component {
    render() {
      return (
        // @ts-ignore
        <I18nextProvider i18n={i18next}>
          <WrappedComponent {...this.props} language={i18next.language} />
        </I18nextProvider>
      );
    }
  };
}
