@CrossOrigin(origins = "*", allowedHeaders = "*")
@Controller
public class HomeController 
{
    @GetMapping(path="/")
    public String homeInit(Model model) {
        return "home";
    }
}
