// --------------------------------------------------------------------------------------------------------------------
// <copyright file="Startup.cs" company="Microsoft">
//   Copyright � 2015 Microsoft
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

[assembly: Microsoft.Owin.OwinStartup(typeof(App.Web1.Startup))]

namespace App.Web1
{
    using Owin;

    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            //// For more information on how to configure your application, visit:
            //// http://go.microsoft.com/fwlink/?LinkID=316888

            this.ConfigureAuth(app);
        }
    }
}
