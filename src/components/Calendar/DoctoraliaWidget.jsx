import React, { useEffect } from "react";

const DoctoraliaWidget = () => {
  const handleScriptInject = (script) => {
    const scriptTag = document.createElement("script");
    scriptTag.async = true;
    scriptTag.src = script;
    document.body.appendChild(scriptTag);
  };

  const handleWidgetLoad = () => {
    const script = document.createElement("script");
    script.text = `
      !function($_x,_s,id){
        var js,fjs=$_x.getElementsByTagName(_s)[0];
        if(!$_x.getElementById(id)){
          js = $_x.createElement(_s);
          js.id = id;
          js.src = "//platform.docplanner.com/js/widget.js";
          fjs.parentNode.insertBefore(js,fjs);
        }
      }(document,"script","zl-widget-s");
    `;
    handleScriptInject(script.src);
  };

  useEffect(() => {
    handleWidgetLoad();
  }, []);

  return (
    <div>
      <a
        id="zl-url"
        className="zl-url"
        href="https://www.doctoralia.es/clara-lopez/psicologo/sevilla"
        rel="nofollow"
        data-zlw-doctor="clara-lopez"
        data-zlw-type="big_with_calendar"
        data-zlw-opinion="false"
        data-zlw-hide-branding="true"
        data-zlw-saas-only="false"
      />
      <div
        id="zl-widget-s"
        data-zlw-doctor="clara-lopez"
        data-zlw-type="big_with_calendar"
        data-zlw-opinion="false"
        data-zlw-hide-branding="true"
        data-zlw-saas-only="false"
      />
    </div>
  );
};

export default DoctoraliaWidget;
